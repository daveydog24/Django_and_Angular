from django.db import models

class Hero(models.Model):
    name = models.CharField(max_length=255)
    abilities = models.CharField(max_length=255)

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    last_login = models.DateTimeField(auto_now=True)

class GithubPlayer(models.Model):
    name = models.CharField(max_length=255)
    score = models.CharField(max_length=255)
    pic = models.CharField(max_length=255)