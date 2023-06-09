# Sử dụng một base image có sẵn với Node.js
FROM node:16

# Đặt thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép mã nguồn ứng dụng vào thư mục làm việc
COPY . .

# Khai báo cổng mà ứng dụng lắng nghe
EXPOSE 3000

# Chạy ứng dụng khi container được khởi chạy
CMD [ "npm", "start" ]
