#### www.nginx
```command
# clone source
cd /var
git clone https://github.com/ICDT-interactive-content-design-tool/www.nginx.git www.tabca

# copy config to nginx
cp /etc/nginx/nginx.conf /etc/nginx/nginx-original.conf
cp /var/www.tabca/nginx/conf/nginx.conf /etc/nginx/nginx.conf
cp /var/www.tabca/nginx/tabca.vn.conf /etc/nginx/conf.d/
cp /var/www.tabca/nginx/www.tabca.vn.conf /etc/nginx/conf.d/
```
###### create ssl R3 on ubuntu nginx
```command
sudo apt install nginx certbot python3-certbot-nginx -y
sudo certbot --nginx -d www.tabca.vn
```
###### pull update
```command
cd /var/www.tabca
git pull
```
###### đổi tên tệp .zip theo cấu trúc, rồi xả nén thư mục vào font
```PowerShell
Ls | Rename-Item -NewName { >_.Name -replace "_","" }
Get-ChildItem -Recurse | Rename-Item -NewName { >_.Name -replace "_","" }
```
