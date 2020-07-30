# Installation

## Get Composer

SlothPress utilizes composer to manage its dependencies.
Please refer to the instructions given [here](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos) in order to install composer on your machine, or [here](https://getcomposer.org/doc/00-intro.md#installation-windows) to get it to work on Windows.

## Installing SlothPress
Please install SlothPress by issuing the Composer ``create-project`` command in your terminal:
```
composer create-project --prefer-dist slothpress/slothpress my-awesome-website
```
This will create a directory called ``my-awesome-website`` on your computer and automatically download the latest version of WordPress along with the latest version of SlothPress and its dependencies.

## Local Development Environment
The guys at [Laravel](https://laravel.com/) have done a great job in providing us with their fantastic local development environment called [Laravel Homestead](https://laravel.com/docs/7.x/homestead).
SlothPress by default is packaged with it so you can easily start a local development environment for your project.

To develop your application with Homestead, you need to have [Vagrant](https://www.vagrantup.com/) up and running.

::: tip
It is highly recommended to install [Vagrant::Hostsupdater
](https://github.com/agiledivider/vagrant-hostsupdater) alongside Vagrant in order to keep things easy when it comes managing your your ``/etc/hosts`` file on the host system. 
:::

When you have managed to install Vagrant it is as easy as issuing the following command inside your project folder to get you up and develop:
```
./vendor/bin/homestead make
vagrant up
```

To learn more about Homestead configuration please refer to [the offical documentiation](https://laravel.com/docs/7.x/homestead).

Once Vagrant is provisioned it is time to install WordPress. Please open your Browser and head over to [homestead.test](https://homestead.test) in order to find the (in)famous five-minute WordPress installation process! 🥳

::: tip
Can't reach [homestead.test](https://homestead.test)?

Please make sure your ``/etc/hosts`` file contains something like:
```
192.168.10.10 homestead.test
```
:::

::: tip
What happened to ``init.sql``?

In earlier versions sloth came with it's own Vagrant Box. This Box automatically imported a mysql dump located in ```src/sql/init.sql``` to the database during provisioning.

To bring back this behavior please modify ``my-awesome-website/after.sh`` like that:

```
mysql -uhomestaed -psecret sloth < /home/vagrant/code/src/sql/init.sql
```
:::

::: tip
**Don't like Vagrant?** Please feel free to roll your own environment according to your (Docker) needs 😜
:::

