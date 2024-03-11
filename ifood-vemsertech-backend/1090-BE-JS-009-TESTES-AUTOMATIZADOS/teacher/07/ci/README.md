# adatech-1090

## Docker Installation
- Reference:

  - https://get.docker.com/
  - https://docs.docker.com/engine/install/linux-postinstall/

- 1. download the script

```bash curl -fsSL https://get.docker.com -o install-docker.sh```

- 2. verify the script's content

```bash cat install-docker.sh```

- 3. run the script either as root, or using sudo to perform the installation.

```bash sudo sh install-docker.sh```

- 4. Create the docker group.

```bash sudo groupadd docker```

- 5. Add your user to the docker group.

```bash sudo usermod -aG docker $USER```

- 6. Log out and log back in so that your group membership is re-evaluated.

```bash newgrp docker```

- 7. Verifying

```bash docker ps```

- 8. Restart

```bash sudo reboot```

## Jenkins Installation

- Reference:

 - https://www.jenkins.io/doc/book/installing/linux/

- 1. Add jenkins repository for Ubuntu LTS

``` bash
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
```

``` bash
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
```

- 2. Update

``` bash
sudo apt update -y
```

- 3. Installing Java 11

``` bash
sudo apt install openjdk-11-jre -y
```

- 4. Installing Jenkins 

``` bash
sudo apt install jenkins -y
```

- 5. Check Jenkins

``` bash
sudo systemctl status jenkins
```

- 6. Get Jenkins First Admin Pass

``` bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

## Configure Permissions

- 1. Check docker user group ID

```bash
grep docker /etc/group
```

- 2. Grant Jenkins permission to run docker comanas

```bash
addgroup --gid ${DOCKER_GID} docker && \
usermod -aG docker jenkins
```

- 3. Restart Jenkins

``` bash
sudo systemctl restart jenkins
```
