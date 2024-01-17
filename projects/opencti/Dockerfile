FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
	openssh-server \
	vim

RUN mkdir /var/run/sshd
RUN echo 'root:secret_password' | chpasswd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in user profile"
RUN echo "export VISIBLE=now" >> /etc/profile

EXPOSE 22

ENTRYPOINT ["/usr/sbin/sshd", "-D"]