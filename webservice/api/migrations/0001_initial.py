# Generated by Django 5.0.6 on 2024-05-11 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='e.g.: John Doe', max_length=64)),
                ('origin', models.CharField(blank=True, help_text='e.g.: Some movie', max_length=64)),
            ],
        ),
    ]
