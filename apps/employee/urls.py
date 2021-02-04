from rest_framework import routers
from . import api

router = routers.DefaultRouter()
router.register('employees', api.EmployeeViewSet, "employees"),

urlpatterns = router.urls
