# 베이스 이미지 설정
FROM node:18.17.0-alpine AS build

# 작업 디렉토리 설정
WORKDIR /app

# 요구 사항  파일을 복사하고 종속성 설치
COPY package*.json ./
#RUN npm install
RUN npm install

# 소스 코드를 복사
COPY . .

RUN npm run build

FROM node:18.17.0-alpine

RUN npm install -g serve

WORKDIR /app

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD [ "serve", "-s", "dist", "-l", "3000" ]
