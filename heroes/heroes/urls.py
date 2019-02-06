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
from hero_app.views import Heroes, HeroDetails, LoginUser, AddUser, DeleteUser, UpdateUser, GetUsers
 
urlpatterns = [
    path( 'user/add', AddUser.as_view() ), # adds one user
    path( 'user/login', LoginUser.as_view() ), # gets one user to view
    path( 'user/delete/<int:user_id>', DeleteUser.as_view() ), # deletes one user
    path( 'user/update/<int:user_id>', UpdateUser.as_view() ), # updates one user
    path( 'users/all', GetUsers.as_view() ), # gets all users
    path( 'django/heroes', Heroes.as_view() ), # gets all heroes or adds to the list; 
    path( 'django/heroes/<int:hero_id>', HeroDetails.as_view() ), # updates or deletes specific hero.
]
