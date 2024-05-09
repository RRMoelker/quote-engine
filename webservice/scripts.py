"""
Codifies common commands in development
"""
import os
import sys

from django.core.management import execute_from_command_line

MODULE_NAME = "webservice"


def _execute(*sys_args):
    """Ensures Django settings env variable is set"""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "webservice.settings")
    sys.argv = sys_args
    execute_from_command_line(sys.argv)


def run_server():
    """Run Django dev server for local development"""
    _execute("manage.py", "runserver", "8080")


def test():
    _execute("manage.py", "test")
