from django.urls import path
from .views import TeamListView, PlayerListView

urlpatterns = [
    path('teams/', TeamListView.as_view(), name='team-list'),
    path('players/', PlayerListView.as_view(), name='player-list'),
]