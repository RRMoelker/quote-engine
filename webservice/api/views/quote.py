import json
import requests
from django.conf import settings
from rest_framework import viewsets, permissions
from rest_framework.decorators import action, permission_classes
from rest_framework.response import Response


@permission_classes((permissions.AllowAny,))
class QuoteViewSet(viewsets.ViewSet):
    def list(self, request):
        quotes = ['List view not implemented, try the Extra actions dropdown ^']
        return Response(quotes)

    def retrieve(self, request, pk=None):
        return NotImplementedError()

    @action(detail=False, methods=['get'])
    def random_quote(self, request):
        remote_endpoint = settings.QUOTE_ENDPOINT
        try:
            response = requests.get(remote_endpoint)

            if response.status_code == 200:
                data = json.loads(response.content)
                return Response({
                    'quote': data['content'],
                    'author': data['author'],
                })
            else:
                # Request was unsuccessful, raise an exception with status code
                raise requests.HTTPError(f"HTTP GET request failed with status code: {response.status_code}")

        except requests.RequestException as e:
            # Handle all requests-related exceptions (e.g., connection error, timeout)
            print(f"An error occurred during the HTTP request: {e}")
            raise  # Re-raise the exception for higher-level handling
