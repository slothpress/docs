# Introduction

SlothPress and the Sloth Framework are a tool belt for those of us developers who work regulary on WordPress based projects and are missing dearly won features such as dependency management, a robust ORM, a modular architecture,  a portable development environment or fast code scaffolding – just to name a few.

For the most part SlothPress is rather a collection of great packages, we came across in our daily work as WordPress developer, than a dedicated development of it's own, so most credits go out to the mantainers of those great pieces of code.

In some SlothPress is very opinionated and follows a self invented design pattern called "Model View Module", which of course is very much inspired by the great MVC, but alters the idea of MVC by thinking of smaller units rather than one "monolytic" controller, that are capable of providing reusable functionality, that works in any context with other modules. All is held together by simple templates, that strictly follow the WordPress Template Hierarchy, which many of you should be familiar with.

SlothPress aims to solve all those annoying problems most of us struggle with on a daily base when it comes to WordPress theme development on an abstract and general level. To keep things simple and let us developers be more productive in less time.

## Installation

### Get Composer

When it comes to managing it's dependencies SlothPress utilizes composer.
Please refer to the instructions given [here](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos) in order to install composer on your machine, or [here](https://getcomposer.org/doc/00-intro.md#installation-windows) to get it to work on Windows.

::: tip
We recommend you to install Composer globally on your system.
:::
