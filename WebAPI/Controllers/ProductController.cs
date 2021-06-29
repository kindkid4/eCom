using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Interfaces;
using WebAPI.Dtos;
using System;
using System.Linq;
using AutoMapper;
using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Authorization;

namespace WebAPI.Controllers
{
    [Authorize]
    public class ProductController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public ProductController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }

        //GET api/product
        [HttpGet("products")]
        [AllowAnonymous]
        public async Task<IActionResult> GetProducts()
        {
            var products = await uow.ProductRepository.GetProductsAsync();
            var productsDto = mapper.Map<IEnumerable<ProductDto>>(products);
            
            return Ok(productsDto);
        }

        //POST api/product
        [HttpPost("post")]
        public async Task<IActionResult> AddProduct(ProductDto ProductDto)
        {
            var product = mapper.Map<Product>(ProductDto);
            product.LastUpdatedBy = 1;
            product.LastUpdateOn = DateTime.Now;

            uow.ProductRepository.AddProduct(product);
            await uow.SaveAsync();
            return StatusCode(201);
        }
        //DELETE api/product
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            uow.ProductRepository.DeleteCity(id);
            await uow.SaveAsync();
            return Ok(id);
        }
        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateProduct(int id, ProductDto productDto)
        {
            if (id != productDto.Id)
            {
                return BadRequest("Update not allowed");
            }
            var productFromDb = await uow.ProductRepository.FindCity(id);
            if (productFromDb == null)
            {
                return BadRequest("Update not allowed");
            }
            productFromDb.LastUpdatedBy = 1;
            productFromDb.LastUpdateOn = DateTime.Now;
            mapper.Map(productDto, productFromDb);


            await uow.SaveAsync();
            return StatusCode(200);



        }

        [HttpPut("updateProductName/{id}")]
        public async Task<IActionResult> UpdateProduct(int id, ProductUpdateDto productDto)
        {
            var productFromDb = await uow.ProductRepository.FindCity(id);
            productFromDb.LastUpdatedBy = 1;
            productFromDb.LastUpdateOn = DateTime.Now;
            mapper.Map(productDto, productFromDb);
            await uow.SaveAsync();
            return StatusCode(200);
        }


        [HttpPatch("update/{id}")]
        public async Task<IActionResult> UpdateProductPatch(int id, JsonPatchDocument<Product> productToPatch)
        {
            var productFromDb = await uow.ProductRepository.FindCity(id);
            productFromDb.LastUpdatedBy = 1;
            productFromDb.LastUpdateOn = DateTime.Now;

            productToPatch.ApplyTo(productFromDb, ModelState);

            await uow.SaveAsync();
            return StatusCode(200);
        }

    }
}