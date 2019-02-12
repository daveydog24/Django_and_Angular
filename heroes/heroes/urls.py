"""heroes URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# path is the new django feature over the old url function.
from django.urls import path
from hero_app.views import Heroes, HeroDetails, LoginUser, AddUser, GetUsers, AddGithubPlayer, GetGithubPlayers
# from hero_app.views import Heroes, HeroDetails, LoginUser, AddUser, DeleteUser, UpdateUser, GetUsers
 
urlpatterns = [
    path( 'user/add', AddUser.as_view() ), # ADDS A SINGLE USER
    path( 'user/login', LoginUser.as_view() ), # LOGS IN USER
    path( 'users/all', GetUsers.as_view() ), # GETS A LIST OF ALL USERS
    path( 'django/heroes', Heroes.as_view() ), # GETS A LIST OF ALL USERS OR ADDS A NEW HERO
    path( 'django/heroes/<int:hero_id>', HeroDetails.as_view() ), # GETS A LIST OF ALL USERS OR ADDS A NEW HERO
    path( 'github/player/add', AddGithubPlayer.as_view() ), 
    path( 'github/players/delete/<int:player_id>', GetGithubPlayers.as_view() ), # GETS A LIST OF ALL USERS OR ADDS A NEW HERO
    path( 'github/players/all', GetGithubPlayers.as_view() ), 
    # path( 'user/delete/<int:user_id>', DeleteUser.as_view() ), # DELETES A SINGLE USER
    # path( 'user/update/<int:user_id>', UpdateUser.as_view() ), # UPDATES A SINGLE USER
]
