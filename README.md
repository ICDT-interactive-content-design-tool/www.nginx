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
###### đổi tên và copy font vào đúng cấu trúc thư mục (Mac-Terminal)
```command
#! /bin/bash
cd /Users/ntkien/Downloads/FontSample
for file in "$arg"**/*.ttf; do
    family=$(fc-scan --format "%{family}" $file);
    family=$(echo "$family" | sed -Ee 's/,.+$//g');
    fontname=$(echo "$family" | sed -Ee 's/[^a-zA-Z-]//g');
            
    style=$(fc-scan --format "%{style}" $file);
    style=$(echo "$style" | sed -Ee 's/,.+$//g');
    style=$(echo "$style" | sed -Ee 's/light/Light/g');
    style=$(echo "$style" | sed -Ee 's/bold/Bold/g');
    fontstyle=$(echo "$style" | sed -Ee 's/[^a-zA-Z]//g')

    clonefolder="/Users/ntkien/PROJECT/Fonts";
    newfolder="$clonefolder/$fontname";
    newfilepath="$newfolder/$fontname-$fontstyle.ttf";
    
    test -d "$clonefolder" || mkdir "$clonefolder";
    test -d "$newfolder" || mkdir "$newfolder";
    test -f "$newfilepath" && echo "Exits F: $newfilepath" || mv "$file" "$newfilepath";
done
```
###### đổi tên tệp theo cấu trúc (Win-PowerShell)
```PowerShell
Ls | Rename-Item -NewName { >_.Name -replace "_","" }
Get-ChildItem -Recurse | Rename-Item -NewName { >_.Name -replace "_","" }
```
