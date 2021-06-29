using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebAPI.Data;
using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Helpers;
using WebAPI.Extensions;
using WebAPI.Middlewares;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Data.SqlClient;

namespace WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var builder = new SqlConnectionStringBuilder(Configuration.GetConnectionString("Default"));
            builder.Password = Configuration.GetSection("DBPassword").Value;

            var connectionString = builder.ConnectionString;

            services.AddDbContext<DataContext>(options =>
            options.UseSqlServer(connectionString));
            services.AddControllers().AddNewtonsoftJson();
            services.AddCors();
            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            //Authenticate
            var secretKey = Configuration.GetSection("AppSettings:Key").Value;
            
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(op => op.TokenValidationParameters = new TokenValidationParameters{
                ValidateIssuer = false,
                ValidateIssuerSigningKey = true,
                ValidateAudience = false,
                IssuerSigningKey = key
            })
            ;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.ConfigureExceptionHandler(env);

            app.UseRouting();

            app.UseHsts();

            app.UseHttpsRedirection();

            app.UseCors(m => m.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
