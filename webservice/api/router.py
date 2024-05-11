from rest_framework import routers
from api.views.quote import QuoteViewSet
from api.views.user_management import GroupViewSet, UserViewSet
from api.views.character import CharacterViewSet

router = routers.DefaultRouter()
router.register(r'quotes', QuoteViewSet, basename='quote')
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'characters', CharacterViewSet)