from django import forms
from .models import Video


class VideoForm(forms.ModelForm):
    class Meta:
        model = Video
        fields = [
            'title',
            'category',
            'youtube_url',
            'duration',
            'skills',
            'cover_image',
            'description',
            'activity_title',
            'activity_materials',
            'activity_desc',
        ]

    def clean_youtube_url(self):
        youtube_url = self.cleaned_data.get('youtube_url', '').strip()
        if not youtube_url:
            raise forms.ValidationError('Informe o link ou ID do YouTube.')

        if not Video.extract_youtube_id(youtube_url):
            raise forms.ValidationError('Informe um link ou ID válido do YouTube.')

        return youtube_url

    def clean_skills(self):
        skills = self.cleaned_data.get('skills', '')
        normalized = ','.join([skill.strip() for skill in skills.split(',') if skill.strip()])
        if not normalized:
            raise forms.ValidationError('Informe pelo menos uma habilidade.')
        return normalized

    def clean_activity_materials(self):
        materials = self.cleaned_data.get('activity_materials', '')
        normalized = ','.join([item.strip() for item in materials.split(',') if item.strip()])
        if not normalized:
            raise forms.ValidationError('Informe os materiais necessários.')
        return normalized
