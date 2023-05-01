from platform import system, release, architecture

print(
    f"Plataforma: {system()}\n"
    f"Versão: {release()}\n"
    f"Arquitetura: {architecture()[0]}\n"
)
