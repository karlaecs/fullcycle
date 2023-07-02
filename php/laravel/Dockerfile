FROM php:7.4-cli

WORKDIR /var/www

# pre install
RUN apt-get update -y && \
    # install zip
    apt-get install libzip-dev -y && \
    # install php ext zip
    docker-php-ext-install zip

# install composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');" 

# install and create laravel project
RUN php composer.phar create-project --prefer-dist laravel/laravel laravel

ENTRYPOINT [ "php","laravel/artisan","serve" ]

CMD [ "--host=0.0.0.0" ]