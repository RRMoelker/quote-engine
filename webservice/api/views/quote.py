from rest_framework import viewsets, permissions
from rest_framework.decorators import action, permission_classes
from rest_framework.response import Response


@permission_classes((permissions.AllowAny,))
class QuoteViewSet(viewsets.ViewSet):
    def list(self, request):
        quotes = ['Not implemented']
        return Response(quotes)

    def retrieve(self, request, pk=None):
        return NotImplementedError()

    @action(detail=False, methods=['get'])
    def random_quote(self, request):
        import random
        quotes = [
            "The only limit to our realization of tomorrow will be our doubts of today.",
            "The best way to predict the future is to invent it.",
            "Success is not the key to happiness. Happiness is the key to success.",
        ]
        random_quote = random.choice(quotes)
        return Response({'quote': random_quote})
