from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "SAWA Web Admin Dashboard"
    DATABASE_URL: str
    SECRET_KEY: str = "supersecretkey"

    model_config = SettingsConfigDict(env_file=".env", case_sensitive=True)

settings = Settings()
