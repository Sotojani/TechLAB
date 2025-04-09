# Lista de nombres de estudiantes
estudiantes = ["Leomar", "Jhoanquillys", "Andres", "Jack"]
for estudiante in estudiantes:
    print(f"Estudiante: {estudiante}")

# Diccionario de información de contacto
contacto = {"nombre": "Leomar", "correo": "leomar@example.com"}
for clave, valor in contacto.items():
    print(f"{clave.capitalize()}: {valor}")

# Script para agregar elementos a una lista o actualizar un diccionario
nuevo_estudiante = input("Introduce el nombre de un nuevo estudiante: ")
estudiantes.append(nuevo_estudiante)
print("Lista actualizada de estudiantes:", estudiantes)

nuevo_contacto = input("Introduce un nombre para actualizar/agregar: ")
nuevo_correo = input("Introduce el correo de este contacto: ")
contacto[nuevo_contacto] = nuevo_correo
print("Contactos actualizados:", contacto)