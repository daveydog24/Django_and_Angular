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
from hero_app.views import Heroes, HeroDetails
# from django.views.generic import TemplateView
 
urlpatterns = [
    path( 'django/heroes', Heroes.as_view() ),
    path( 'django/heroes/<int:hero_id>', HeroDetails.as_view() ),
    # path( 'david', TemplateView.as_view(template_name="../src/index.html"))
]
