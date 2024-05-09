import json

import yaml
from django.test import TestCase
from django.urls import reverse
from rest_framework.test import RequestsClient
import xml.etree.ElementTree as ET

client = RequestsClient()


quote_endpoint = reverse("quote-random-quote")


class QuoteViewsTests(TestCase):
    def test_browsable_endpoint(self):
        response = self.client.get(quote_endpoint)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "<h1>Random quote</h1>")

    def test_json_endpoint(self):
        response = self.client.get(f'{quote_endpoint}?format=json')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.content)
        self.assertIsNotNone(data['quote'])

    def test_xml_endpoint(self):
        response = self.client.get(f'{quote_endpoint}?format=xml')
        self.assertEqual(response.status_code, 200)
        root = ET.fromstring(response.content)
        self.assertTrue(root.find('quote') is not None)

    def test_yaml_endpoint(self):
        response = self.client.get(f'{quote_endpoint}?format=yaml')
        self.assertEqual(response.status_code, 200)
        data = yaml.safe_load(response.content)
        self.assertIsNotNone(data['quote'])
