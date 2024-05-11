from django.http import HttpResponse


def index(request):
    return HttpResponse('''
    <p>Hello from the client django view.</p>
    <p>Check out <a href="/api">The browsable API</a></p>
    <p>Or the <a href="/admin">Admin</a></p>
    ''')
