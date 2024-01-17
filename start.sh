#!/bin/bash
echo 'alias netrunner_ai_init="docker exec ollama ollama run mistral"' >> ~/.bashrc
exec /usr/bin/supervisord
