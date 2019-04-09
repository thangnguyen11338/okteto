import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Favicon from 'react-favicon';

/* eslint-disable */
const inprogress = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABd1BMVEX///8zmcxLkOJKkeJKkOJKkOJLkOJKkOJKkOJKj+JJkONJj+JGi+hJkuJJj+FKkOJLkOJNk+BVqv9KkONKkOJKkOJKkeNAgP9Ok+JKkOJKkOJLj+FKkOJKkOJKkOJKkOJKkONKj+NKj+JKkeJKkOFJkOFJkOJJkttEiN1LkOFKkOJKj+FKkeFHjuNVgNVLkeFJkuRKkOJLkeJIkeFKkOFKkOJKjuIA//9VjuNKkOKAgP9LkeRLkOJLkOJIkOJKkOJKkOJKj+JNmeZKkOJKkOJLj+NKkOJHj+BKkeFGi9xKkOJLluFKkOJLj+BKj+JKkOJLkOJKkOJJkONKjeRKkOJKkOJLj+FIkONKkOFLkOJKj+NJj+NJj+JJkuBIj99KkeJLj+JJkttLj+BKkOJJkOJKkOJAn99LkeJKkONKkeJRlORKkOJKkOJKlN5KkOFKkOJJkeNNkeZKkOJKkOJKkeJKkOJKkONKkOJKkOFJj+JMkeNKkOL////S9ha8AAAAe3RSTlMABU6Nuubz6+PAiFALI5LvjCEDdfb7fwQay8gi3uTxwZFkcrLyxnMHD3eveZsSBqQc+ZZDipw0AQmlAkHD2zX0/mAK7upS9RlWFnwRtym52pOVZSbMjkQuz2qQmaAxIJR7Dktx7MQIdL3ZE93oH776dh6Y54bR6fjYi1FUinunAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+IIAg8eO2M3AqUAAAHKSURBVDjLbVNlQwMxDA1TOHS4yxgbDBtjAswOJshwd3d3uz9P0t6udxv50ua9tElfUgDNikxmi9VmLy6RSsug0Mor7IpmlVWOPLq6plYxWF19g55vbFIKrLlF8I5W5R9r09K0tKlQe0dnl7Oi26W6rY1q/h61MreHA719Vo54ud/PvYFBkXNomEG2IXJ8I8zx0340EPRKIdyE/YRZxwiUGD8+ARCJ8rticYRrEoo8SfxUkrAUxqblXP2ZNBLTM7MsXSmD5gDiGfFCOSLqYRlcWYCYXoOoCCghfx4gZFRpFKmFxaXlKSgmdyVXq2YBAA91bwBYD90AXmNAEB/F9AYbLasAQWMAirhG6zowVTsBAsYACWvYwO5sgoXcDhTRGEBywpYJ22VmbcQ2RfV8TDzTxAAn1iQLPhPXjWqKkCQqldaklFHq8Kp9e4dF7DJsD3dxVcwoCh3ep8E8oIBDfvAojPuQ5A0GSEQ4YuAxu8LJz+2Pibwnfo6d8pFTRzo1l+W05+ycIxeXHJheUotzza9cdW1cJ1X35jZ3o+/uv7G/132Mh+1C/tFn+HrOhJF+ep7I+50vrylBv73nf152S2TZ8vH59d3981sk0D/fRAv7Km8ZZgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOC0wMlQxNTozMDo1OSswMjowMCOI9nEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDgtMDJUMTU6MzA6NTkrMDI6MDBS1U7NAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAt0RVh0VGl0bGUAR3JvdXCWHyKMAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC';
const deployed = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABd1BMVEX///8AzMwAwboAwrgAwbkAwbkAwbkAwbgAwbkAwbkAwboAwrkAubkAvbYAwrkAwbkAwboAwbkAqqoAwrkAwbkAwbkAwbkAv78AxLoAwbkAwbkAw7wAwbkAwbkAwbkAwbkAwbkAwroAwLoAwbkAwbkAwbkAwbgAtrYAu7sAwbgAwLkAwrkAwLgAxrgA1aoAwbkAv7YAwbkAwrkAwroAwLkAwbkAv7oA//8AxsYAwbkA/4AAwLgAwrgAwbkAwLcAwbkAwbkAwroAzLMAwbkAwbkAwbcAwbkAwrgAwbgAxbkAwbkAw7QAwrkAwbsAwbkAwbkAwboAwbkAwLgAw7wAwbkAwLkAv7gAwrcAwbkAwLkAwbgAwbkAwbkAwbsAv7cAwbgAwbkAyLYAwrgAwrkAwbkAwbkAv78AwbkAwbkAwbgAvLwAwbkAwbkAvbUAwbkAwbkAwLoAxLsAwbkAwbkAwLkAwbkAwbkAwbkAwLkAwbkAwLoAwbn///9m2rmsAAAAe3RSTlMABU6Nuubz6+PAiFALI5LvjCEDdfb7fwQay8gi3uTxwZFkcrLyxnMHD3eveZsSBqQc+ZZDipw0AQmlAkHD2zX0/mAK7upS9RlWFnwRtym52pOVZSbMjkQuz2qQmaAxIJR7Dktx7MQIdL3ZE93oH776dh6Y54bR6fjYi1FUinunAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+IIAQEsLWK4YWEAAAHKSURBVDjLbVNlQwMxDA1TOHS4yxgbDBtjAswOJshwd3d3uz9P0t6udxv50ua9tElfUgDNikxmi9VmLy6RSsug0Mor7IpmlVWOPLq6plYxWF19g55vbFIKrLlF8I5W5R9r09K0tKlQe0dnl7Oi26W6rY1q/h61MreHA719Vo54ud/PvYFBkXNomEG2IXJ8I8zx0340EPRKIdyE/YRZxwiUGD8+ARCJ8rticYRrEoo8SfxUkrAUxqblXP2ZNBLTM7MsXSmD5gDiGfFCOSLqYRlcWYCYXoOoCCghfx4gZFRpFKmFxaXlKSgmdyVXq2YBAA91bwBYD90AXmNAEB/F9AYbLasAQWMAirhG6zowVTsBAsYACWvYwO5sgoXcDhTRGEBywpYJ22VmbcQ2RfV8TDzTxAAn1iQLPhPXjWqKkCQqldaklFHq8Kp9e4dF7DJsD3dxVcwoCh3ep8E8oIBDfvAojPuQ5A0GSEQ4YuAxu8LJz+2Pibwnfo6d8pFTRzo1l+W05+ycIxeXHJheUotzza9cdW1cJ1X35jZ3o+/uv7G/132Mh+1C/tFn+HrOhJF+ep7I+50vrylBv73nf152S2TZ8vH59d3981sk0D/fRAv7Km8ZZgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOC0wMVQwMTo0NDo0NSswMjowMHwsFnAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDgtMDFUMDE6NDQ6NDUrMDI6MDANca7MAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAt0RVh0VGl0bGUAR3JvdXCWHyKMAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC';
const icons = {
  destroying: inprogress,
  destroyed: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCAECBxxHUCJrAAAC1UlEQVRIx5VVS0hUYRT+zv3HRw8fg2ZZUo4iOmGoIBGSvZDANpELIVu0qkxFYYI0dbxdfBREZuYU2sNNuGgXtLGXDzCMNgO1UXA00LSkmkbNqXn8Lbxz74zzup3VOd8533fP+S//f4gj2C7FpJXTURxAPhLghBMzNOmddL66tRZcS5sFzNlCAz+L1BC6dnrstbTPRhCoZLkmkrAF4c3NO3SdojukgLTb+5wXI7q9Z1WiLUjAbKA3MGigA8ACL/WNIgtIWZ5x7AkocpCVW/ERiZTJM3EMCQHZWXZY/AIAuo3Z854G0O2841df7x8VaEqKqaYGpCuAwWPBGaUD8zXq8qM/Yo3ij+C+pVj3EzqnhKssRfwLEIeU4ZlBrHIoD6SacKMTtVn4ZTlYXM3uXgcEwFun0jEk1IU/O86lGn4VawA4mrvXAYCub/XMQy9XLK/u24AjWUs6K2Wj4reNSOc+SXol1xudDnQu4pkaCcIhxV9xWaLTN5uOqwITN35qpZmN1AMDhlmjDtkKatNKr49LHkcqgBxPvIB45Yw1C+hLlNta7icgOLQKCAuKuyRgRekgX6uAOE13AAAO3iTgkw+mQq0CgGRiBfw0M7a/JvNtmGTUYU/zv0Aax+Fjip+YXPu/dIDl2bZXY5scHXw5UOaMTCDiF0aG31aNsuMfAEDod9GQktXH3IxGbx3kA0ilQtxtKwIAARB68FupuCj2EYUXaLtH52VXx0/JAuIczGoJr20dNIV8l6VE8T73OyXBCsgvUiUzTga8x8vodVn8b0Z9XFINtSDFr2aClYlO5VFtSWdjyAn44AomYMMs7LSfF6AI+oDstLuk67vSAQBIGZ4xZGn8d19ZiW8zCD5MnPee4FZN9BFWrC4WQcU7Pk8V4wrWIpJdaGRl4rwKBC1Xaa+3mVdgRwjyEg16H0Zcrj6rZMYjvAK5fCftQhLmMI0perf0ot8VXPsPtnPvVnTaLgEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDgtMDFUMDI6MDc6MjgrMDI6MDA9sNp4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA4LTAxVDAyOjA3OjI4KzAyOjAwTO1ixAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAALdEVYdFRpdGxlAEdyb3Vwlh8ijAAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg==',
  deploying: inprogress,
  deployed: deployed,
  devdeploying: inprogress,
  devdeployed: deployed,
  failed: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABd1BMVEX////MADPRAxrQAhvQARvQAhvQAhvQAhvQAhvRAxvQAhrPAxrRABfTAB3QAhrQAhvQAhvRABeqAADPAhrQAhvQAhvRAhq/AADOAB3RAxrQAxvSAB7QAhzQAhvQAhzPAxrQAhrRAxzQAhvQARvQAhvRAxvQAhvbACTMACLQAhzQARzRAhvPAhrVABzVACvQAhrRABvQAhvPAhvRBBvRAhzQAhzOAB3/AADGABzRAhr/AADQBBvQAxvQAhvPAB3QAhvQAhvPAxvMABrQAhvQAhvQAxzQAhvMAB/QAxvRABfQAhvSAB7QARrNABnQARzQAhvQAhzRAhvPAxzQABvQAxzQAhvOBBrTABzQAhvPAhrPAhvQAhvRAhvQABrPABjQAhzPAhvIABLPAxvQAhvRAhvQAxvfACDRAhrQARvQAhvJABvQAhvQAhvOABnQARvQAhvPAhrMABrQAhvQAhrPAhvPAhvQAhvQAhvQAhvPAhzQAxzQAhv///9N/jFwAAAAe3RSTlMABU6Nuubz6+PAiFALI5LvjCEDdfb7fwQay8gi3uTxwZFkcrLyxnMHD3eveZsSBqQc+ZZDipw0AQmlAkHD2zX0/mAK7upS9RlWFnwRtym52pOVZSbMjkQuz2qQmaAxIJR7Dktx7MQIdL3ZE93oH776dh6Y54bR6fjYi1FUinunAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+IIAQIBN722fK0AAAHKSURBVDjLbVNlQwMxDA1TOHS4yxgbDBtjAswOJshwd3d3uz9P0t6udxv50ua9tElfUgDNikxmi9VmLy6RSsug0Mor7IpmlVWOPLq6plYxWF19g55vbFIKrLlF8I5W5R9r09K0tKlQe0dnl7Oi26W6rY1q/h61MreHA719Vo54ud/PvYFBkXNomEG2IXJ8I8zx0340EPRKIdyE/YRZxwiUGD8+ARCJ8rticYRrEoo8SfxUkrAUxqblXP2ZNBLTM7MsXSmD5gDiGfFCOSLqYRlcWYCYXoOoCCghfx4gZFRpFKmFxaXlKSgmdyVXq2YBAA91bwBYD90AXmNAEB/F9AYbLasAQWMAirhG6zowVTsBAsYACWvYwO5sgoXcDhTRGEBywpYJ22VmbcQ2RfV8TDzTxAAn1iQLPhPXjWqKkCQqldaklFHq8Kp9e4dF7DJsD3dxVcwoCh3ep8E8oIBDfvAojPuQ5A0GSEQ4YuAxu8LJz+2Pibwnfo6d8pFTRzo1l+W05+ycIxeXHJheUotzza9cdW1cJ1X35jZ3o+/uv7G/132Mh+1C/tFn+HrOhJF+ep7I+50vrylBv73nf152S2TZ8vH59d3981sk0D/fRAv7Km8ZZgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOC0wMVQwMjowMTo1NSswMjowMFu8wuYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDgtMDFUMDI6MDE6NTUrMDI6MDAq4XpaAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAt0RVh0VGl0bGUAR3JvdXCWHyKMAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC',
  new: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCAECBCk6zrWLAAADZUlEQVRIx42VbUybVRTHf+dpHRMcCwN16KIwXMjMzLakM4YwnTKz9cVtEkIiZh9NHJtZgh/QOTUuzOzL4kvWmPi2mBg+EIKZeVrWKOmYw2BGIon6AcJAE+ZQAiNDCpO2xw9tb1taKv8vz73nnv//Oefce88VJReueza79RmeYIds0CWWuKGDDMa+Cy3k+spKAU8NJ+UlKvLozskXlv/biQICzY6FNt7jXlZHlI7I2XA0r8Dhh6KXcPH/+Ela7PEcgUPVsT6q10AHuOnYm0olKeDbqld5OMvpDsMM8wulWiVV7GND1uqEs/7SnwDORO7xryWTPqcdXAjeTRue31j0qp6k0hiqo35eNBF43+T9DPrnsfbLs7lxN6+LfKkvm9z/KS7v+hdE8WyRG6wzC5/YrYmRu8E6wCbKdUS6A0MAIl6/Hks63iqp6VpMpHAiTadzzwkA37OcseqTktDuG4u19F5XpdU7wbuUoJzqWgSQF4pjk5Ql6dMlj3Ytgq9Ru5EVGUTkqN0DcLDSsTd6JfR3Ut59RL4xTm8HOsC9x7pCcZ7NU2mwwyuNFk+Z8bz4ARydeekgnMk1OiUtMGDfBq+Lx1gFWu9u6O0D8G3XD6mWkNXupMasjwNok7A6rAP0gadIrlIBui223mK90R8HkFoKYROAVWduq9sSI8AdAGYKCpQD6E0zn7J03tRoBwCzhfg6AhAY5YPEL+UNi1/N6i6AeKiQgHQnvoG2+E457Nxufy+e87SlUtAHgnfB94PWr0Ifs7fllFX6zbhUjgPwDpqXH4m15NmXqV6mzey0rwzssDQRyU1fjvZeBxHPK95p78++5JWzhpbpNE5l8XMAdk98n4xlBX9NGuweEHFflE+pYJd+5NkNIIq7yvot4/D6g6+pAnhd2iS1zDAbDyXOH3gvcNyInrbPphpKG+czYv3qvmOJq5oNT6l1znQDQHx2ICnQ7FgYzOrH03wsfvt2BrlIWvUtKc/wGYjsDy+Zpnqw0tFP9hbNM8C4TOgcj7OT3aZnJDBaVNczk6xB8h9bpJ+trA1/SV3qZbBStuAkzzG8JnpYXemHxUrbA3+UuHidhYLkZW1/cn9wMqOUKw/doUdip2jk/jzkKS46Piv4uKbQ7Ig8TaPW8iCb2cjvjOqI48db9tByru9/zwMmgqmemIkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDgtMDFUMDI6MDQ6NDErMDI6MDCFcC0vAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA4LTAxVDAyOjA0OjQxKzAyOjAw9C2VkwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAALdEVYdFRpdGxlAEdyb3Vwlh8ijAAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg==',
  default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABX1BMVEX///8AzMwAwboAwrgAwbkAwbkAwbkAwbgAwbkAwbkAwboAwrkAubkAvbYAwrkAwbkAwboAwbkAqqoAwrkAwbkAwbkAwbkAv78AxLoAwbkAwbkAw7wAwbkAwbkAwbkAwbkAwbkAwroAwLoAwbkAwbkAwbkAwbgAtrYAu7sAwbgAwLkAwrkAwLgAxrgA1aoAwbkAv7YAwbkAwrkA//8AxsYAwbkA/4AAwbkAwbkAwroAzLMAwbkAwbkAwrgAwbgAxbkAwbkAw7QAwrkAwbsAwbkAwbkAwboAwbkAwLgAwLgAw7wAwbkAwLkAv7gAwrcAwbkAwLkAwbgAwbkAwbkAwbsAv7cAwbkAwbgAwbkAyLYAwrgAwrkAwbkAwbkAv78AwbkAwbkAwbgAvLwAwbkAwbkAvbUAwbkAwbkAwLoAxLsAwbkAwbkAwLkAwbkAwbkAwbkAwLkAwbkAwLoAwbn///+n2QtZAAAAc3RSTlMABU6Nuubz6+PAiFALI5LvjCEDdfb7fwQay8gi3uTxwZFkcrLyxnMHD3eveZsSBqQc+ZYBCaUC9P5gCu7qGVYWfBG3Kbnak5VBZSbMjkQuz2qQmaAxIPWUew5LcezECHS92RPd6B+++nYemOeG0en42ItRa/lXggAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCAIPFhV3OIViAAABfElEQVQ4y3VTZ1fCMBQNe7kABwoIFKQORAQUhaKIshRFRcW999b+/3MkL5GWNn1f8t699yRvBaGO6fQGo8lssdrsjh6ktt4+i9ix/gGngna5B8UuGxoekfOeUVFlY16Jd/pEhvk7z3j9FBoPBENcXzhCQ5+Hvj9BM4vyBJicMhFkmsQzJIrNSm/G5wAyx3GQmIcg2VVVKokxUxr7duAXFhWFuzPi0jJ2sjnMC2lV5/Irq3A64IIC0jR4IbKmLbBhQZFJrW+UyllkxYIKi+fx9GIIZhhlCarQb2TGR40l2MTMFoKuBpk51NvT2UZGLAiwC9jRt8dlgDHy2mXqoVGctkAnYEFO1alUzdLYBW8PrthX8k28mAfYPTwCRSvVJWgBeAw+RxamKRvoSZJgpxC56EoLBZoIf3ZOkItLAuRLdEsjxcpVqH6do+HN7f+NiTvW2t/LPsZDQ80/JuRJu7hMN/30rFzSl1dBot/elZ8XbqmWjR+fX9/hn1+dhP4B/2iqD62r9isAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDgtMDJUMTU6MjI6MjErMDI6MDDf2b7yAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA4LTAyVDE1OjIyOjIxKzAyOjAwroQGTgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAALdEVYdFRpdGxlAEdyb3Vwlh8ijAAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=='
}; 
/* eslint-enable */

class AppIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Favicon url={icons[this.props.icon] || icons.default} />
    );
  }
}

AppIcon.defaultProps = {
  icon: 'default'
};

AppIcon.propTypes = {
  icon: PropTypes.string
};

export default AppIcon;
