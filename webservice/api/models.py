from django.db import models
from django.utils.translation import gettext as _

class Character(models.Model):
    name = models.CharField(max_length=64, help_text=_('e.g.: John Doe'))
    origin = models.CharField(max_length=64, blank=True, help_text=_('e.g.: Some movie'))

    @property
    def description(self):
        if (len(self.origin) > 0):
            return f'{self.name} ({self.origin})'
        return self.name

    def __str__(self):
        return self.description

class Quote(models.Model):
    author = models.CharField(max_length=128, )
    content = models.TextField()

    def __str__(self):
        return f'{self.content} - {self.author}'


