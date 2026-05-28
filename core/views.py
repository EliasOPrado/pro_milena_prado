import json
from django.contrib import messages
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View

from .forms import VideoForm
from .models import Video


class HomePageView(View):
    template_name = 'index.html'

    def get(self, request):
        form = VideoForm()
        return render(request, self.template_name, self.get_context(request, form))

    def post(self, request):
        form = VideoForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Vídeo publicado com sucesso no Canal Pedagógico!')
            return redirect(f"{reverse('home')}?tab=admin")

        return render(request, self.template_name, self.get_context(request, form))

    def get_context(self, request, form):
        server_videos = [
            {
                'id': f'server-video-{submission.pk}',
                'title': submission.title,
                'category': submission.category,
                'description': submission.description,
                'youtubeId': submission.youtube_id,
                'coverImage': submission.cover_image or f'https://img.youtube.com/vi/{submission.youtube_id}/0.jpg',
                'duration': submission.duration,
                'skills': [skill.strip() for skill in submission.skills.split(',') if skill.strip()],
                'activityTitle': submission.activity_title,
                'activityText': submission.activity_desc,
                'materialsNeeded': [item.strip() for item in submission.activity_materials.split(',') if item.strip()],
            }
            for submission in Video.objects.order_by('-created_at')
        ]

        latest_submission = Video.objects.order_by('-created_at').first()
        recent_submission = None
        if latest_submission:
            recent_submission = {
                'title': latest_submission.title,
                'category': latest_submission.category,
                'description': latest_submission.description,
                'youtube_url': latest_submission.youtube_url,
                'duration': latest_submission.duration,
                'skills': [skill.strip() for skill in latest_submission.skills.split(',') if skill.strip()],
                'cover_image': latest_submission.cover_image,
                'activity_title': latest_submission.activity_title,
                'activity_desc': latest_submission.activity_desc,
                'activity_materials': [item.strip() for item in latest_submission.activity_materials.split(',') if item.strip()],
            }

        return {
            'form': form,
            'form_data': request.POST.dict() if request.method == 'POST' else {},
            'server_videos_json': json.dumps(server_videos, ensure_ascii=False),
            'recent_submission': recent_submission,
            'initial_tab': request.GET.get('tab', 'admin' if request.method == 'POST' else 'home'),
        }
