using AutoMapper;
using WebAPI.Dtos;
using WebAPI.Models;

namespace WebAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(){
            CreateMap<Product,ProductDto>().ReverseMap();

            
        }
    }
}