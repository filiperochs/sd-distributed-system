# sd-distributed-system

Repositório para o sistema distribuído construído para a disciplina de Sistemas Distribuídos no CEFET-MG

## Integrantes

- Filipe da Silva Rocha (20193003809)
- Leonardo
- Vitor

## Montar imagem do frontend

```bash
docker build -t frontend:latest ./chat-web-app
```

## Montar imagens do backend e subir containers

```bash
docker-compose down -v && docker-compose up --build -d
```
