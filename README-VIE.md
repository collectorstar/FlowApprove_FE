# FlowApprove FE

Frontend cho dự án FlowApprove, được xây dựng bằng Angular 21.

## Mục Lục

1. [Tổng Quan](#tổng-quan)
2. [Tình Trạng Hiện Tại](#tình-trạng-hiện-tại)
3. [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)
4. [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
5. [Yêu Cầu Môi Trường](#yêu-cầu-môi-trường)
6. [Cài Đặt](#cài-đặt)
7. [Chạy Local](#chạy-local)
8. [Build](#build)
9. [Test](#test)
10. [Tích Hợp Backend](#tích-hợp-backend)
11. [Giới Hạn Hiện Tại](#giới-hạn-hiện-tại)
12. [Hướng Phát Triển Tiếp Theo](#hướng-phát-triển-tiếp-theo)

## Tổng Quan

Repository này chứa ứng dụng frontend của FlowApprove.

Ở thời điểm hiện tại, frontend vẫn đang ở giai đoạn xây dựng nền tảng. Mục tiêu chính là hoàn thiện app shell, routing theo feature, các thành phần UI dùng chung, và lớp tích hợp API để sẵn sàng kết nối backend khi contract ổn định.

## Tình Trạng Hiện Tại

- Đã có layout tổng thể của ứng dụng.
- Đã thiết lập routing theo từng feature.
- Đã có các thành phần UI dùng chung và hệ thống theme cơ bản.
- Đã có thư mục `api-client` để chuẩn bị cho lớp gọi API viết tay hoặc sinh tự động.
- Chưa triển khai các tính năng nghiệp vụ hoàn chỉnh.
- Chưa có entity hoặc domain model hoàn chỉnh ở phía frontend.
- Một số màn hình vẫn dùng dữ liệu mock để phục vụ dựng giao diện.
- Độ phủ test hiện còn thấp.

## Công Nghệ Sử Dụng

- Angular 21
- TypeScript
- SCSS
- PrimeNG
- RxJS
- Vitest thông qua Angular builder

## Cấu Trúc Dự Án

```text
src/app
|- api-client/     Lớp client để tích hợp API backend
|- core/           Hạ tầng dùng chung như interceptor, constant
|- features/       Các màn hình và luồng theo từng nhóm nghiệp vụ
|- layout/         App shell, sidebar, topbar, loading overlay
|- shared/         Model, type và UI component dùng lại
|- state/          Store ở cấp ứng dụng
`- theme/          Token thiết kế và style toàn cục
```

## Yêu Cầu Môi Trường

- Node.js 20+
- npm 9+

Kiểm tra nhanh:

```bash
node -v
npm -v
```

## Cài Đặt

Cài đặt dependency:

```bash
npm install
```

## Chạy Local

Khởi động development server:

```bash
npm start
```

Địa chỉ mặc định:

```text
http://localhost:4200
```

## Build

Tạo bản build production:

```bash
npm run build
```

Thư mục đầu ra:

```text
dist/flow-approve-web
```

## Test

Chạy test:

```bash
npm test
```

Chạy một lần, không bật watch:

```bash
npm test -- --watch=false
```

## Tích Hợp Backend

Cấu hình base URL hiện tại:

```ts
baseUrl: '/api'
```

Điều này có nghĩa là frontend đang được chuẩn bị để gọi backend qua cùng origin hoặc thông qua reverse proxy. Nếu FE và BE chạy tách riêng trong môi trường local thì sau này cần bổ sung proxy hoặc cấu hình môi trường phù hợp.

## Giới Hạn Hiện Tại

- `api-client/generated` hiện vẫn chỉ là placeholder, chưa được sinh từ OpenAPI.
- Nhiều service trong feature vẫn đang trả dữ liệu mock.
- Chưa có luồng tích hợp hoàn chỉnh giữa tính năng frontend và API thật.
- Test hiện chủ yếu mới kiểm tra khả năng boot ứng dụng.
- Các màn hình hiện tại nên được xem là khung UI, chưa phải nghiệp vụ production-ready.

## Hướng Phát Triển Tiếp Theo

- Xác định model frontend dựa trên contract backend thực tế.
- Thay dần service mock bằng tích hợp API thật.
- Sinh hoặc triển khai lớp API client.
- Mở rộng test ở cấp feature.
- Bổ sung cấu hình runtime theo môi trường khi FE và BE bắt đầu chạy cùng nhau.
