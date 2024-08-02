import string
import secrets

characters = string.ascii_letters + string.digits


def create_id(length: int):
    return "".join(secrets.SystemRandom().choices(characters, k=length))
