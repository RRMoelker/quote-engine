from django.http import HttpResponse


def index(request):
    return HttpResponse('Hello from the client django view. Check out <a href="/api">The browsable API</a>')
