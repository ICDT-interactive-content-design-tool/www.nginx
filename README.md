# www.nginx

# open PowerShell, đổi tên tệp .zip theo cấu trúc, rồi xả nén thư mục vào font
>  ls | Rename-Item -NewName { $_.Name -replace "_","" }

# install nginx + certbot (ubuntu)
$ sudo apt install nginx certbot python3-certbot-nginx -y

# clone source build
$ cd /var
$ git clone https://github.com/ICDT-interactive-content-design-tool/www.nginx.git www.tabca

# pull update
$ cd /var/www.tabca
$ git pull

# copy config to nginx
$ cp /etc/nginx/nginx.conf /etc/nginx/nginx-original.conf
$ cp /var/www.tabca/nginx/conf/nginx.conf /etc/nginx/nginx.conf
$ cp /var/www.tabca/nginx/tabca.vn.conf /etc/nginx/conf.d/
$ cp /var/www.tabca/nginx/www.tabca.vn.conf /etc/nginx/conf.d/

# create ssl R3
$ sudo certbot --nginx -d www.tabca.vn