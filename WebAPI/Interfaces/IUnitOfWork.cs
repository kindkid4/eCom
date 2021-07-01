using System.Threading.Tasks;

namespace WebAPI.Interfaces
{
    public interface IUnitOfWork
    {
         IProductRepository ProductRepository {get;}
         IUserRepository UserRepository{get;}

         IPhotoRepository PhotoRepository{get;}
         Task<bool> SaveAsync();
    }
}