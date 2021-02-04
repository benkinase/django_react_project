from django.contrib import admin
from .models import Employee

class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'address', 'role', 'department', 'salary')
    list_filter = ('name',)
admin.site.register(Employee,EmployeeAdmin)


