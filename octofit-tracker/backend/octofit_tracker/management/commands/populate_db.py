from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Users
        users = [
            User(email='tony@stark.com', name='Tony Stark', team='Marvel'),
            User(email='steve@rogers.com', name='Steve Rogers', team='Marvel'),
            User(email='bruce@wayne.com', name='Bruce Wayne', team='DC'),
            User(email='clark@kent.com', name='Clark Kent', team='DC'),
        ]
        for user in users:
            user.save()

        # Activities
        activities = [
            Activity(user='Tony Stark', activity_type='Running', duration=30),
            Activity(user='Steve Rogers', activity_type='Cycling', duration=45),
            Activity(user='Bruce Wayne', activity_type='Swimming', duration=60),
            Activity(user='Clark Kent', activity_type='Flying', duration=120),
        ]
        for activity in activities:
            activity.save()

        # Leaderboard
        Leaderboard.objects.create(team='Marvel', points=75)
        Leaderboard.objects.create(team='DC', points=180)

        # Workouts
        workouts = [
            Workout(name='Pushups', description='Do 20 pushups', difficulty='Easy'),
            Workout(name='Sprints', description='Run 5 sprints', difficulty='Medium'),
            Workout(name='Bench Press', description='Bench press 100kg', difficulty='Hard'),
        ]
        for workout in workouts:
            workout.save()

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data'))
