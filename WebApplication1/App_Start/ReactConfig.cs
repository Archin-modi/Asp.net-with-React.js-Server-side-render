using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;
using React;
[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(WebApplication1.ReactConfig), "Configure")]

namespace WebApplication1
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            ReactSiteConfiguration.Configuration
                 .SetLoadBabel(false)
                 .AddScriptWithoutTransform("~/build/server.bundle.js");

            //JsEngineSwitcher.Instance.DefaultEngineName = V8JsEngine.EngineName;
            //JsEngineSwitcher.Instance.EngineFactories.AddV8();
        }
	}
}