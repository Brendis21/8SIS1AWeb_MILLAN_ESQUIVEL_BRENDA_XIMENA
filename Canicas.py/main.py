import math

class Vertex:
    def __init__(self, name):
        self.name = name
        self.neighbors = []

    def add_neighbor(self, vertex):
        if vertex not in self.neighbors:
            self.neighbors.append(vertex)

class Graph:
    def __init__(self):
        self.vertices = []

    def add_vertex(self, vertex):
        if isinstance(vertex, Vertex) and vertex.name not in self.vertices:
            self.vertices.append(vertex.name)
            return True
        else:
            return False

graph = Graph()

num_vertices = int(input("Ingrese la cantidad de canicas: "))

for i in range(num_vertices):
    vertex_name = input(f"Ingrese el color de las canicas {i+1}: ")
    vertex = Vertex(vertex_name)
    graph.add_vertex(vertex)

print("Son" , num_vertices, "canicas y sus colores son:")
for vertex_name in graph.vertices:
    print(vertex_name)
#-------------finaliza la parte de grafos-------------------

def binomial_probability(n, num_vertices, p):#calcula la probabilidad de obtener un número determinado de exitos de un número 
    return math.comb(n, num_vertices) * (p**num_vertices) * ((1-p)**(n-num_vertices)) #calcular la probabilidad binomial. La función math.comb calcula el coeficiente binomial

n = 100 #numero de intentos que van a ser .
p = 1/num_vertices #probabilidad de éxito

for num_vertices in range(1, num_vertices):
   probability = binomial_probability(n, num_vertices, p)
for vertex_name in graph.vertices:#recorre el grafo
    print(f"La probabilidad de que la cantidad que la canica {vertex_name} salga en exactamente {n} tiradas es {probability:.4f}")

