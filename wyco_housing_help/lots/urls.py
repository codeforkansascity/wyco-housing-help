from rest_framework import routers
from .api import LotViewSet

router = routers.DefaultRouter()
router.register('api/lots', LotViewSet, 'lots')

urlpatterns = router.urls