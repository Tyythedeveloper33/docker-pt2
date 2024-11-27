FROM python:3.13-alpine
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx usr/local/bin/ 
WORKDIR /backend
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-cache
COPY . .
EXPOSE 5000
CMD ["uv", "run", "flask", "run", "--host", "0.0.0.0"]