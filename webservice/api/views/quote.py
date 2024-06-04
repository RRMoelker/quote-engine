import json
import requests
from django.conf import settings
from rest_framework import viewsets, permissions
from rest_framework.decorators import action, permission_classes
from rest_framework.response import Response
from ..models import Quote
from ..serializers import QuoteSerializer


def create_quote_object(content: str, author: str):
    obj, created = Quote.objects.get_or_create(
        author=author,
        content=content,
    )
    return obj


def get_random_quote() -> Quote:
    # TODO, no quotes
    return Quote.objects.order_by('?').first()


def create_quote_response(quote: Quote) -> Response:
    return Response({
        'quote': quote.content,
        'author': quote.author,
    })


@permission_classes((permissions.AllowAny,))
class QuoteViewSet(viewsets.ModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer

    @action(detail=False, methods=['get'])
    def random_quote(self, request):
        remote_endpoint = settings.QUOTE_ENDPOINT
        try:
            response = requests.get(remote_endpoint)

            if response.status_code == 200:
                data = json.loads(response.content)
                quote = create_quote_object(data['content'], data['author'])
                return create_quote_response(quote)
            else:
                # Request was unsuccessful, raise an exception with status code
                raise requests.HTTPError(f"HTTP GET request failed with status code: {response.status_code}")

        except requests.RequestException as e:
            # Handle all requests-related exceptions (e.g., connection error, timeout)
            print(f"An error occurred during the HTTP request: {e}")
            quote = get_random_quote()
            return create_quote_response(quote)
