#### www.nginx
```command
# clone source
cd /var
git clone https://github.com/ICDT-interactive-content-design-tool/www.nginx.git www.tabca

# copy config to nginx
cp /etc/nginx/nginx.conf /etc/nginx/nginx-original.conf
cp /var/www.tabca/nginx/conf/nginx.conf /etc/nginx/nginx.conf
cp /var/www.tabca/nginx/conf.d/tabca.vn.conf /etc/nginx/conf.d/
cp /var/www.tabca/nginx/conf.d/www.tabca.vn.conf /etc/nginx/conf.d/

cp /home/ubuntu/www.tabca.vn.conf /etc/nginx/conf.d/
cp /home/ubuntu/test.tabca.vn.conf /etc/nginx/conf.d/

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
rootfolder="/Users/ntkien/Downloads/FontSample";
clonefolder="/Users/ntkien/Downloads/Fonts";

test -d "$clonefolder" || mkdir "$clonefolder";

for file in "$rootfolder/"**/*.ttf; do
   
    pattern=$(fc-scan --format "x" $file);
    if ((${#pattern} != 1)); then
        echo "Num pattern fail! [${#pattern}]";
    else
        family=$(fc-scan --format "%{family}" $file);
        family=$(echo "$family" | sed -Ee 's/,.+$//g');
        fontname=$(echo "$family" | sed -Ee 's/[^a-zA-Z-]//g');
                
        style=$(fc-scan --format "%{style}" $file);
        style=$(echo "$style" | sed -Ee 's/,.+$//g');
        style=$(echo "$style" | sed -Ee 's/light/Light/g');
        style=$(echo "$style" | sed -Ee 's/bold/Bold/g');
        fontstyle=$(echo "$style" | sed -Ee 's/[^a-zA-Z]//g')

        newfolder="$clonefolder/$fontname";
        newfilepath="$newfolder/$fontname-$fontstyle.ttf";
        
        test -d "$newfolder" || mkdir "$newfolder";
        test -f "$newfilepath" && echo "Exits F: $newfilepath" || cp "$file" "$newfilepath";
    fi;
done
```
###### đổi tên tệp theo cấu trúc (Win-PowerShell)
```PowerShell
Ls | Rename-Item -NewName { >_.Name -replace "_","" }
Get-ChildItem -Recurse | Rename-Item -NewName { >_.Name -replace "_","" }
```

###### di chuyển file vào thư mục theo cấu trúc tên file (Win-PowerShell)
```PowerShell
$FolderName = Read-Host "Nhap ten thu muc (ten thu muc can match theo ten danh sach file)"
$targetFrom="C:\Users\ntkien.LVDOMAIN\Downloads"
$targetTo="$targetFrom\$FolderName"
if (Test-Path -Path $targetTo) {
    "Folder exit"
    Pause
    Exit
}
New-Item -Path $targetTo -ItemType Directory
Get-ChildItem -Path "$targetFrom\$FolderName*.svg" -Recurse | Move-Item -Destination $targetTo
```
