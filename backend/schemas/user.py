
def userEntity(item) -> dict:
    return {
        "id": str(item['_id']),
        "name": item['name'],
        "email": item['email'],
        "password": item['password'],
    }


def usersEntity(entities) -> list:
    return [userEntity(item) for item in entities]


def userEntityWithoutPassword(item) -> dict:
    return {
        "id": str(item['_id']),
        "name": item['name'],
        "email": item['email'],
    }


def usersEntityWithoutPassword(entities) -> list:
    return [userEntity(item) for item in entities]
