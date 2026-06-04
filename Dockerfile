#Etapa 1: Construcción
FROM node:20-alpine AS builder

#Definir el directorio de trabajo
WORKDIR /app

COPY package*.json ./

# Instalar dependencias
RUN npm ci

COPY . .

RUN npm run build

#Etapa 2: RUN(imagen final)
FROM node:20-alpine

#Definir el directorio de trabajo
WORKDIR /app

#Activar optimizaciones de rendimiento para producción
ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

CMD ["node", "dist/main.js"]