from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    currentWins = models.IntegerField(default=0)
    currentLosses = models.IntegerField(default=0)

    def __str__(self):
        return self.name
    
class Player(models.Model):
    name = models.CharField(max_length=100)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name="players")
    position = models.CharField(max_length=50)
    points_per_game = models.FloatField()
    assists_per_game = models.FloatField()
    rebounds_per_game = models.FloatField()

    def __str__(self):
        return self.name

