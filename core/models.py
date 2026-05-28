import re
from django.db import models


class Video(models.Model):
    CATEGORY_MUSICA = 'musica'
    CATEGORY_HISTORIAS = 'historias'
    CATEGORY_ALFABETIZACAO = 'alfabetizacao'
    CATEGORY_DESENVOLVIMENTO = 'desenvolvimento'

    CATEGORY_CHOICES = [
        (CATEGORY_MUSICA, 'Musiquinhas'),
        (CATEGORY_HISTORIAS, 'Histórias & Fauna'),
        (CATEGORY_ALFABETIZACAO, 'Alfabetização'),
        (CATEGORY_DESENVOLVIMENTO, 'Coordenação e Brincar'),
    ]

    title = models.CharField(max_length=200)
    category = models.CharField(max_length=30, choices=CATEGORY_CHOICES)
    youtube_url = models.CharField(max_length=255)
    youtube_id = models.CharField(max_length=50, blank=True)
    duration = models.CharField(max_length=30)
    skills = models.CharField(max_length=255)
    cover_image = models.CharField(max_length=255, blank=True)
    description = models.TextField()
    activity_title = models.CharField(max_length=200)
    activity_materials = models.TextField()
    activity_desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'core_videosubmission'

    def save(self, *args, **kwargs):
        self.youtube_id = self.extract_youtube_id(self.youtube_url)
        super().save(*args, **kwargs)

    @staticmethod
    def extract_youtube_id(value):
        if not value:
            return ''

        value = value.strip()
        match = re.search(
            r'(?:(?:youtu\.be/)|(?:youtube\.com/(?:watch\?v=|embed/|v/|shorts/)))([A-Za-z0-9_-]{11})',
            value
        )
        if match:
            return match.group(1)

        if re.fullmatch(r'[A-Za-z0-9_-]{11}', value):
            return value

        query_match = re.search(r'[?&]v=([A-Za-z0-9_-]{11})', value)
        if query_match:
            return query_match.group(1)

        return ''

    def __str__(self):
        return self.title
