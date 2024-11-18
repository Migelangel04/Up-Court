from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Team, Player
from .serializers import TeamSerializer, PlayerSerializer

class TeamListView(APIView):
    def get(self, request):
        teams = Team.objects.all()
        serializer = TeamSerializer(teams, many=True)
        return Response(serializer.data)

class PlayerListView(APIView):
    def get(self, request):
        players = Player.objects.all()
        serializer = PlayerSerializer(players, many=True)
        return Response(serializer.data)