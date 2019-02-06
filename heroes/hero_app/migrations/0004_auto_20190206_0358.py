# Generated by Django 2.1.5 on 2019-02-06 03:58

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('hero_app', '0003_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='last_login',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='user',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
