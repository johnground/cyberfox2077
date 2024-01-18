FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
	curl \
	openssh-server \
	vim \
	sudo 

RUN mkdir /var/run/sshd
RUN echo 'root:masterpassword' | chpasswd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in user profile"
RUN echo "export VISIBLE=now" >> /etc/profile

RUN mkdir -p /etc/ansible && touch /etc/ansible/hosts
EXPOSE 22

RUN curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh

ENTRYPOINT ["/usr/sbin/sshd", "-D"]
