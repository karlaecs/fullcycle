FROM golang:1.20-alpine

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY *.go ./

RUN go build -o /hello

EXPOSE 8080

CMD [ "/hello" ]
